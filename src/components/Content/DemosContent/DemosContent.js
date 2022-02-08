import '../Content.css';

const DemosContent = () => {

    return(
        <div className="content-col fadeInContent">
            <article id="bbcalc" className="article">
                <div>
                    <h1 className="f2 rcTitle tc">Barbell Plates Calculator</h1>
                    <hr className="mw4 cusBar bb bw1 b--black-10"/>
                    <span>
                        <b>Overview: </b>Based on user input, this application will calculate and display the olympic plates needed for each side of a specific barbell weight setup.<br/><br/>
                        <b>Features:</b>
                            <ul className="rcList">
                                <li>plate visualization</li>
                                <li>'per side' plate details</li>
                                <li>toggle button for pounds or kilograms</li>
                                <li>rounds user input down to the nearest available plate size</li>
                                <li>input validation features</li>
                            </ul>
                        <b>Repository: </b><a className="no-underline" href="https://github.com/kbh1301/barbell-plates-calculator" target="_blank" rel="noopener noreferrer">github.com/kbh1301/barbell-plates-calculator</a>
                        <br/><br/>
                    </span>
                    
                    <iframe src="https://kbh1301.github.io/barbell-calc/" width="100%" height="500px"></iframe>
                </div>
            </article>
        </div>
    );
}

export default DemosContent;