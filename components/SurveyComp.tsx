import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { StylesManager, Survey } from 'survey-react';
import "survey-core/defaultV2.css";
import * as firebase from "firebase/app";
import "firebase/database";
import { Database } from 'firebase/database';

const surveyJSON = {
  //copy paste survey from surveyJS creator
    "title": "Career Survey",
    "description": "Give us some general knowledge on the career you want to choose.",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "Which subject interests you the most?",
        "isRequired": true,
        "choices": [
         {
          "value": "scienceClass",
          "text": "Science"
         },
         {
          "value": "techClass",
          "text": "Technology"
         },
         {
          "value": "engineerClass",
          "text": "Engineering"
         },
         {
          "value": "mathClass",
          "text": "Mathematics"
         }
        ]
       }
      ],
      "title": "Branches",
      "description": "The main STEM paths."
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "checkbox",
        "name": "question2",
        "visibleIf": "{question1} = 'scienceClass'",
        "title": "Within the scientific field, choose the options that best suit you.",
        "isRequired": true,
        "choices": [
         "Item 1",
         "Item 2",
         "Item 3"
        ]
       },
       {
        "type": "checkbox",
        "name": "question3",
        "visibleIf": "{question1} = 'techClass'",
        "title": "Within the technological field, choose the options that best suit you.",
        "isRequired": true,
        "choices": [
         "Item 1",
         "Item 2",
         "Item 3"
        ]
       },
       {
        "type": "checkbox",
        "name": "question4",
        "visibleIf": "{question1} = 'engineerClass'",
        "title": "Within the engineering field, choose the options that best suit you.",
        "isRequired": true,
        "choices": [
         "Item 1",
         "Item 2",
         "Item 3"
        ]
       },
       {
        "type": "checkbox",
        "name": "question5",
        "visibleIf": "{question1} = 'mathClass'",
        "title": "Within the mathematical field, choose the options that best suit you.",
        "isRequired": true,
        "choices": [
         "Item 1",
         "Item 2",
         "Item 3"
        ]
       }
      ],
      "title": "Science Field"
     }
    ]
   };

function SurveyComp() {
  const [results, setResults] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      StylesManager.applyTheme("defaultV2");
    }
  }, []);

  const handleComplete = (survey: {
    onComplete: any; data: React.SetStateAction<null>; 
}) => {
    console.log(survey.data);
    setResults(survey.data);

    survey.onComplete.add(function(result: { data: any; }) {
      firebase.database().ref("surveyResults").push(result.data).then(() => {
        console.log("Data saved successfully");
      })
      .catch((error: any) => {
        console.error("Error saving data: ", error);
      });;
    });
  };

  return <Survey json={surveyJSON} onComplete={handleComplete} />;
}
//gg
export default SurveyComp;

