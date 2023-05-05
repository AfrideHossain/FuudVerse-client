const Blog = () => {
  return (
    <div className="container md:w-[992px] w-full my-5 px-4 mx-auto">
      <h2 className="text-3xl text-center font-bold text-gray-800">
        React QnA
      </h2>
      <div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-gray-700">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p className="ps-5 mt-2 text-base font-medium text-gray-600">
            Components can be controlled or uncontrolled based on management of
            their state. Uncontrolled components manage their state internally.
            They are Usually they are implemented using traditional html form
            elements.Uncontrolled component updates their state using their own
            event handlers without informing their parent.
            <br />
            On the other hand controlled component that rely on their parent
            component to manage their state. They are implemented using custom
            react component that define their own state. When controlled
            component update their state they do it by calling a function that
            passed as a prop by their parent. This allows parent component to
            keep tracking the state.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-gray-700">
            2. How to validate React props using PropTypes
          </h3>
          <p className="ps-5 mt-2 text-base font-medium text-gray-600">
            We can validate React props using React built-in library called
            PropTypes.
            <br />
            First import PropTypes from prop-types.
            <br />
            Then write necessary codes to define component. After defining
            component we will write code to validate our prop type at the very
            end of our jsx file. here is the process:
            <br />
            <pre className="w-20">
              <code>
                {`MyComponent.propTypes = {
                      title: PropTypes.string.isRequired,
                      text: PropTypes.string.isRequired,
                    }`}
                ;
              </code>
            </pre>
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-gray-700">
            3. Tell us the difference between nodejs and express js.
          </h3>
          <p className="ps-5 mt-2 text-base font-medium text-gray-600">
            Node js is a javascript runtime that allows us to run server side
            code.
            <br />
            On the other hand express js is a javascript framework build on top
            of node js. it provides a set of high level api and things to make
            easier to build serverside web applications.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-gray-700">
            4. What is a custom hook, and why will you create a custom hook?
          </h3>
          <p className="ps-5 mt-2 text-base font-medium text-gray-600">
            A custook hook is a javascript code written by developer using many
            built-in react hooks. That helps developer to manage code and reduce
            repetaions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
