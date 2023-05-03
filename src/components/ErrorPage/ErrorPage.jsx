const ErrorPage = () => {
  const errorImage = `https://raw.githubusercontent.com/AfrideHossain/images/main/errorIllustration/11104-removebg-preview.png`;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-7">
      <img src={errorImage} alt="Error" className="mb-2 w-64" />
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700">
        We apologize for the inconvenience. Please try again later.
      </p>
    </div>
  );
};

export default ErrorPage;
