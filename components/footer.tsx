import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
    // <footer style={{ backgroundColor: 'skyblue', textAlign: 'center', padding: '20px 0', marginTop: 'auto' }}>
    //     <Container>
    //     <Row>
    //         <Col>
    //         Designed and Coded with ❤️💛❤️ by RHS © 2023
    //         </Col>
    //     </Row>
    //     </Container>
    // </footer>
    <main className="flex-col fill-green-200 overflow-hidden relative flex min-h-[407px] justify-between gap-5 pl-14 pr-20 pt-12 pb-7 items-end max-md:flex-wrap max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aa8bdc65303a76b463fe6d66753b43a274e24ca584db352bb90f820bece699e?apiKey=8e76384001834e4d97140c999d9f144f&"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <Container className="relative flex flex-col items-stretch mt-32 max-md:mt-10">
        <h1 className="text-gray-50 text-2xl font-bold">Header</h1>
        <div className="text-black text-lg mt-11 max-md:mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
          cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
          nunc eget dictum Sed ornare cursus sed nunc eget dictum{' '}
        </div>
      </Container>
      <Container className="relative flex justify-between gap-5 mt-40 items-start max-md:mt-10">
        <div className="flex flex-col items-stretch">
          <h2 className="text-white text-2xl font-bold whitespace-nowrap">Contact Us</h2>
          <div className="flex justify-between gap-2.5 mt-5 pr-7 py-2.5 items-start max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c0aceb95231027d3539dcb1ec011593c6ac679d848c4f106d3ab486c954c5e?apiKey=8e76384001834e4d97140c999d9f144f&"
              className="aspect-square object-contain object-center w-18 justify-center items-center overflow-hidden shrink-0 max-w-full"
              alt=""
            />
            <Button
              variant="dark"
              className="text-base font-bold self-stretch grow whitespace-nowrap"
            >
              Button
            </Button>
          </div>
        </div>
        <section className="self-stretch flex flex-col">
          <h2 className="text-white text-2xl font-bold self-center whitespace-nowrap">Info</h2>
          <div className="flex justify-between gap-2.5 mt-5 pr-6 py-2.5 items-start max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c0aceb95231027d3539dcb1ec011593c6ac679d848c4f106d3ab486c954c5e?apiKey=8e76384001834e4d97140c999d9f144f&"
              className="aspect-square object-contain object-center w-18 justify-center items-center overflow-hidden shrink-0 max-w-full"
              alt=""
            />
            <Button
              variant="dark"
              className="text-neutral-900 text-base font-bold self-stretch grow whitespace-nowrap"
            >
              Button
            </Button>
          </div>
          {/* Additional button sections go here */}
        </section>
      </Container>
    </main>
    );
};

export default Footer;
