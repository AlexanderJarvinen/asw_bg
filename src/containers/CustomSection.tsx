import {useContext, useRef, useEffect} from "react";
import {AnchorContext} from "react-anchor-navigation"

export const CustomSection = ({ children, ...attributes }) => {
    const { registerSection, unregisterSection, hash } = useContext(AnchorContext);
    const ref = useRef(null);
    const selected = attributes.id === hash.substr(1);
    const newClassName = (attributes.className ? `${attributes.className}` : '') + (selected ? ' selected' : '');

    useEffect(() => {
        if (ref.current) {
            registerSection(ref.current);

            if (attributes.id === window.location.hash.substr(1)) {
                ref.current.scrollIntoView();
            }
        }

        return () => {
            if (ref.current) {
                unregisterSection(ref.current);
            }
        };
    }, []);

    return (
        <section {...attributes} className={newClassName} ref={ref}>
            {children}
        </section>
    );
}
