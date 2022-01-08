import React from 'react';
import SingleLineShooterV2 from  './components/SingleLineShooter/SingleLineShooterV2'; 
import SingleLinkShooterNoDescr from './components/SingleLineShooter/SingleLinkShooterNoDescr'; 

const Wrapper = (props) => {
    

    return (

        /*
        In this component you can set on its props the lines of text you want and at what time you want displayed.
        Check comments on props to learn more.
        */


        <>
             <SingleLineShooterV2

                        /* 'timeBetweenVerses' (array of numbers - ms) -  For each number of lines of text you want, you have to set at what time you want them to show on screen. *** WARNING - if you don't set the same number of timeframes and text strings it will crash ***  */
                            timeBetweenVerses={ [1000,1800,3000,3800,5000,6200] }
                        /* 'timeToLaunch' (number . ms) - Time delay for component to render first line of text */    
                            timeToLaunch={1}
                        /* 
                            slotTarget={setLaunchNav}
                            componentToLaunch = {navComponent}
                            launchComponentFunction={launchComponent}

                            This functions were made to render a following component at the end of this ones last line. Learn more about it by checking out my CV 
                        */
                            
                            
                        /* 'lineType' (string) type of HTML tag you want rendered */
                            lineType={'h2'}

                        /* 'incrementTime' (number - ms per letter) speed of text */    
                            incrementTime={10}
                            
                            
                        /* 'hideDasher' (boolean) To hide blinking text dash after all text is rendered */    
                            hideDasher={true}
                           
                        /* 'verses' (array of strings) Text to type */    
                            verses={['Hello Stranger', 'This is an example of how this react components based typer works.','Explore the code!', 'you can customize lots of things','instructions are found in comments inside the files code.' , 'you can see this working in a deeper level by checking my CV in the link below']}
                            />

                        <h2>
                        <SingleLinkShooterNoDescr
                        
                            /* same component as before but built to work with hyperlinks */
                            timeBetweenVerses={[7500]}
                            timeToLaunch={1} 
                            timeToNext={0} 
                            incrementTime={10}
                            hideDasher={true}
                            verses={['Link to my CV\'s gitHub']}
                            linkHref={['#']} /* string - inster https address */ 
                            />

                        </h2>   

        </>

    )
}

export default Wrapper

