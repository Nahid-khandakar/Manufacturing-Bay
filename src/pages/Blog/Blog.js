import React from 'react';

const Blog = () => {
    return (
        <div className='px-5 my-10'>

            {/* question -1 */}
            <div className='border-solid border-2 border-primary rounded-md p-5 my-8'>
                <h1 className='text-xl text-primary font-bold my-5'>1. How will you improve the performance of a React Application?</h1>

                <p>
                    1. Load your components on demand with code-splitting and dynamic imports
                    <br />
                    2. Batch your DOM operations
                    <br />
                    3. Dispatch if using redux
                    <br />
                    4. Use PureComponents
                    <br />
                    5. Use the useCallback hook
                    <br />
                    6. Keeping component state local where necessary
                </p>



            </div>

            <hr />

            {/* question -2 */}
            <div className='border-solid border-2 border-primary rounded-md p-5 my-8'>
                <h1 className='text-xl text-primary font-bold my-5'>2. What are the different ways to manage a state in a React application?</h1>
                <p>
                    React components have a built-in state object. The state is encapsulated data where store assets that are persistent between component renderings.There are four main types of state need to properly manage in a React apps .Local state , Global state , Server state , URL state . Manage these four type of state there are two way in react . useState() and useReducer.
                </p>
            </div>


            {/* question -3 */}
            <div className='border-solid border-2 border-primary rounded-md p-5 my-8'>
                <h1 className='text-xl text-primary font-bold my-5'>3. How does prototypical inheritance work?</h1>
                <p>
                    JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                    <br />
                    prototypical inheritance refers to the ability to access object properties from another object. We use  JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                </p>
            </div>


            {/* question -4 */}
            <div className='border-solid border-2 border-primary rounded-md p-5 my-8'>
                <h1 className='text-xl text-primary font-bold my-5'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p>
                    If we update state right away, our changes may be overwritten if we call setState() later. When we directly update the state, this.state does not change immediately. Instead, it creates a pending state transition that will only return the current value if accessible after this function has been used. All of our components' states will be out of our control.
                </p>
            </div>


            {/* question -5 */}
            <div className='border-solid border-2 border-primary rounded-md p-5 my-8'>
                <h1 className='text-xl text-primary font-bold my-5'>5. What is a unit test? Why should write unit tests?</h1>
                <p>
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers .  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>

        </div>
    );
};

export default Blog;