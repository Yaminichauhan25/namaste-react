import React from "react";
import ReactDOM from "react-dom/client";

// const headeing = React.createElement('h1', {id: 'heading'}, 'Hello, World from js');
// console.log(headeing);

// const jsxHeading = <h1 id='heading'>Hello, World from JSX</h1>;
// console.log(jsxHeading);

//React Functional Component

//const HeadingComponent1 = () =>  <h1 className='heading'>Hello, World from Functional Component</h1>;

// const TitleComponent = () => {
//     return <h1 className='heading'>Hello, World from  title Component</h1>;
// }

// const Title = (
//   <h1 className="heading">
//     Hello, World from title element
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {/* <TitleComponent /> */}
//     {Title}
//     <h1 className="heading">Hello, World from Functional Component</h1>;
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

// const reactElement = React.createElement(
//   "div",
//   { className: "title" },
//   React.createElement("h1", {}, "Hello, World from React Element"),
//   React.createElement("h2", {}, "Hello, World from React Element"),
//   React.createElement("h3", {}, "Hello, World from React Element")
// );
// const HeadingElement = () => (
//   <div className="title">
//     <h1>Hello, World from React JSX Element 1</h1>    
//     <h2>Hello, World from React JSX Element 2</h2>
//     <h3>Hello, World from React JSX Element 3</h3>
//   </div>
// );

const Logo = () => (
    <div className="logo">
      <span className="logo-icon">🛍️</span>
      <h2>ShopEase</h2>
    </div>
  );


const SearchBar = () => (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
      />
      <button aria-label="Search">🔍</button>
    </div>
  );


const UserIcon = () => (
    <div className="user-icon" aria-label="User profile">
      👤
    </div>
  );


const Header = () => (
    <header className="header">
      <Logo />
      <SearchBar />
      <UserIcon />
    </header>
  );

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);