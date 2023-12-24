export default function Home() {
    return (
        <div className="block">
            <div className="block">
                <h2 className="title is-2">Component Lifecycle</h2>
                <ol>
                    <li>Mounting</li>
                    <li>Updating</li>
                    <li>Unmounting</li>
                </ol>
                {`* is required, others will be called if defined`}
                <h3 className="title is-3 mt-5">Mounting phase - putting elements into the DOM</h3>
                <ol>
                    <li>
                        <pre>constructor( props )</pre>
                        <ul>
                            <li>called when component is initiated</li>
                            <li>set initial `state`</li>
                        </ul>
                    </li>
                    <li>
                        <pre>getDerivedStateFromProps(props,state)</pre>
                        <ul>
                            <li>set `state` based on the initial `props`</li>
                            <li>(updates `state` from initial before render)</li>
                            <li>returns state object</li>
                        </ul>
                    </li>
                    <li>
                        <pre>*render()</pre>
                    </li>
                    <li>
                        <pre>componentDidMount()</pre> - run statements that requires that the component is already
                        placed in the DOM
                    </li>
                </ol>

                <h3 className="title is-3 mt-5">Updating phase - when a component is updated</h3>
                <ol>
                    <li>
                        <pre>getDerivedStateFromProps( props, state )</pre>
                    </li>
                    <li>
                        <pre>shouldComponentUpdate()</pre> - return a Boolean that specifies whether React should
                        continue with the rendering or not default is true
                    </li>
                    <li>
                        <pre>*render()</pre>
                    </li>
                    <li>
                        <pre>getSnapshotBeforeUpdate( prevProps, prevState )</pre> - gives access to the `props` and
                        `state` before the update (i.e. even after the update, you can check what the values were before
                        the update) requires `componentDidUpdate()` method
                    </li>
                    <li>
                        <pre>componentDidUpdate()</pre>
                    </li>
                </ol>

                <h3 className="title is-3 mt-5">Unmounting - when a component is removed from the DOM</h3>
                <ol>
                    <li>
                        <pre>componentWillUnmount()</pre> - is called when a component is about to be unmounted
                    </li>
                </ol>
            </div>
            <hr />
            <div className="block">
                <h2 className="title is-2">There are 3 rules for hooks:</h2>
                <ol>
                    <li>Hooks can only be called inside React function components.</li>
                    <li>Hooks can only be called at the top level of a component.</li>
                    <li>Hooks cannot be conditional</li>
                </ol>
                <Header title="useState" subtitle="to track state in a component" />
                <pre>
                    {`
const [ state, setState ] = useState( <initial state> )
updateState( newState ) = setState( previousState => newState )
            `.trim()}
                </pre>
                <Header
                    title="useEffect"
                    subtitle="to perform side effects (e.g. fetching data, directly updating the DOM, and timers.)"
                />
                <pre>{`useEffect(<function>, <dependency>)`}</pre>
                <Header title="useContext" subtitle="createContext, useContext, <context-name>.Provider" />
                to manage state globally
                <Header title="useRef" />
                <ul>
                    <li>allows to persist values between re-renders</li>
                    <li>to store mutable values and not to cause re-renders on updates</li>
                    <li>to have direct access to the DOM</li>
                </ul>
                <Header title="useReducer" subtitle="is like useState, but allows to implement custom state logic" />
                <pre>
                    {`
useReducer(<reducer>, <initial state>)
returns [<state>, <dispatch>]
            `.trim()}
                </pre>
                <Header title="useCallback" />
                <ul>
                    <li>returns a memoized callback function (that doesn't need to be recalculated)</li>
                    <li>
                        to isolate resource intensive functions so that they will not automatically run on every render
                    </li>
                    <li>only runs when one of its dependencies is updated</li>
                    <li>
                        function are recreated on each render, to prevent the function from being recreated unless
                        necessary, use `useCallback`
                    </li>
                </ul>
                <Header title="useMemo" subtitle="returns a memoized value" />
                <Header title="Custom hooks" />
            </div>
        </div>
    );
}

function Header({ title, subtitle }) {
    return (
        <header className="is-flex is-flex-wrap-wrap is-align-items-center mt-5">
            <h3 className="title is-3 mr-3">{title}</h3>
            <h4 className="subtitle">{subtitle}</h4>
        </header>
    );
}
