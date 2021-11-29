import { BarbellPlatesCalculator } from 'barbell-plates-calc';

const DemosContent = () => {

    return(
        <article class="pa2 flex flex-column bg-white br4 mv3 mh2 ba bw1 b--black shadow-5 items-center tl">
            <div>
                <h1 class="f2 rcTitle tc">Barbell Plates Calculator</h1>
                <hr class="mw4 cusBar bb bw1 b--black-10"/>

                <p>
                    <b>Overview: </b>Based on user input, this application will calculate and display the olympic plates needed for each side of a specific barbell weight setup.<br/><br/>
                    <b>Features:</b>
                        <ul className="rcList">
                            <li>plate visualization</li>
                            <li>'per side' plate details</li>
                            <li>toggle button for pounds or kilograms</li>
                            <li>rounds user input down to the nearest available plate size</li>
                            <li>input validation features</li>
                        </ul>
                    <b>Repository: </b><a class="no-underline" href="https://github.com/kbh1301/barbell-plates-calculator" target="_blank">github.com/kbh1301/barbell-plates-calculator</a>
                </p>

                <BarbellPlatesCalculator />
            </div>
        </article>
    );
}

export default DemosContent;