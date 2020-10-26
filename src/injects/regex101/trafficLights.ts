
function injectFunctions(func: Function): void
{
    let scriptEl = document.createElement("script");
    scriptEl.text = func.toString();
    document.body.appendChild(scriptEl);

    console.log('[Inject Function] Function loader script element:\n%o', scriptEl)
    console.log('[Inject Function] Calling function');

    func()
}

function TrafficBarLoader()
{
    const console = window.console;
    abstract class TrafficBarModifier
    {
        delay: number = 1000;
        static init(modifier: TrafficBarModifier): void
        {
            console.log('%c[TrafficBarModifier]%c init', 'color: red; font-weight: 600;', '')
            if(TrafficBarModifier.isDarwin())
            {
                console.log(
                    '%c[TrafficBarModifier]%c Applying traffic lights modification in %ims', 
                    'color: red; font-weight: 600;', '', modifier.delay
                )
                modifier.injectLogoFixLoader()
            }
            else
            {
                console.log('%c[TrafficBarModifier]%c Skipping traffic lights modification', 'color: red; font-weight: 600;', '')
            }
        }
        static isDarwin(): boolean
        {
            return /Mac OS X/i.test((navigator || window.navigator).userAgent)
        }

        injectLogoFixLoader(): void
        {
            const loaderType = this.constructor.name;
            const attach = () =>
            {
                let loader = document.createElement("script");

                loader.text = `// Loader: ${loaderType}\nsetTimeout(() => {\nfunction ${this.apply.toString()}\napply()}, ${this.delay})`;
                
                console.log(`%c[${loaderType}]%c Created logo fix loader script element:\n %o`, 'color: #C08; font-weight: 600;', '', loader)

                document.body.appendChild(loader);
            }
            window.addEventListener('DOMContentLoaded', () => { 
                console.log(
                    `%c[${loaderType}]%c Attaching on %cDOMContentLoaded%c:\n %o`, 
                    'color: #C08; font-weight: 600;', '', 
                    'font-weight: 700; color: #00C;', '', 
                    attach
                )
                console.log(
                    `%c[${loaderType}]%c Attaching immediately:\n %o`, 
                    'color: #C08; font-weight: 600;', '', 
                    attach
                )
                attach() 
            })
            attach();
        }

        constructor() 
        {
            console.log('%c[TrafficBarModifier]%c Created Instance', 'color: red; font-weight: 600;', '')
        }

        abstract apply(): void
    }

    class TrafficBarTitle extends TrafficBarModifier
    {
        apply(): void
        {
            const console = window.console
            const document = window.document
            // Ok actually do it now
            const logoAnchor = document.querySelector(`#regex-app > div > header > a`)

            if(logoAnchor instanceof HTMLAnchorElement)
            {
                logoAnchor.classList.add('logo-parent', 'darwin');
                logoAnchor.style.paddingTop = "25px !important"
                console.log('%c[TrafficBarModifier]%c Added classes to logo parent:\n%o', 'color: red; font-weight: 600;', '', logoAnchor)
            }
            else if(logoAnchor)
            {
                console.error('Matched element is not instance of HTMLAnchorElement.')
                return
            }
            else
            {
                console.error('Failed to match any element with logo parent selector.')
                return
            }
        }
    }

    const patchTrafficLights = () => {
        const method = new TrafficBarTitle();

        TrafficBarModifier.init(method);
    }
    patchTrafficLights()
}

TrafficBarLoader()

// injectFunctions(TrafficBarLoader)