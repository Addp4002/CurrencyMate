function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">About This App</h2>
      <p className="max-w-lg text-gray-700">
        This currency converter web app is built using React.js, React Router, and live ExchangeRate API.
        It allows real-time currency conversions with a simple, responsive design.
      </p>
    </div>
  );
}

export default About;