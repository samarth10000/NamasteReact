# NamasteReact

# parcel

- Dev Build
  -Local Server
  -HMR - Hot Mosule Replacement
  -File Watching Algorithm - written in c++
  -Caching - Faster Builds
  -Image Optimization
  -Minification
  -Bundling
  -Compress
  -consistent Hasing
  -code splitting
  -Differential Bundling - support older browsers
  -Diagonostic
  -Error Handling
  -HttPs
  -Tree Shaking - remove unused code

# Namsaste Food

// DESIGN OF THE APP--------------
// Header
// - Logo
// - Nav items
// - Body
// - Search
// -Restraunt Container
// - Restraunt Card
// - Footer
// -Copyright
// -Links
// -Address
// -Contact

# Two types of Export/Import

//Default Export/Import
export default Component;
import Component From "path";

-Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

UseState() - Superpowerful State Variable in react
UseEffect()

// 2 Types of Routing in Web apps
-Client Side Routing
-Server Side Routing

🔍 Key Concepts You Should Know for Interviews for class components

Concept Explanation
class Component Blueprint to create React components using ES6 class syntax.
extends React.Component Inherit from the core Component class to get React functionality.
constructor Method to initialize state or bind event handlers.
super(props) Mandatory call to parent constructor to access this.props.
this.state Object to manage local component state.
this.props Read-only object of data passed from parent to child.
render() Required method in class components — returns JSX to render.

# Class Component LifeCycle -->

Parent Constructor
Parent Render

First Construct
First Render

Second Constructor
Second Render

<DOM Updated - IN SINGLE BATCH>

First ComponentDidMount
Second ComponentDidMount

Parent ComponentDidMount

# Complete Cycle

// Very IMPORTANT
// Mounting
// Constructor (Dummy)
// Render (Dummy)
// <HTML Dummy >
// Component DId Mount
// <Api Call in Did Mount>
// <This.setState> state variable is updated
// UPDATE
// render(Api data)
// <HTML (new Api data>)
// Component did Update
