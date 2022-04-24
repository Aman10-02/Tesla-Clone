import React from 'react'
import styled from 'styled-components'
import { JackInTheBox} from "react-awesome-reveal";

function Section({title, description, backgroundimg, topbtntext, botbtntext, arrow}) {
  return (
    <Wrap bgimage = {backgroundimg}>
        <JackInTheBox>
            <Textarea>
                <h1>{title}</h1>
                <p>{description}</p>
            </Textarea>
        </JackInTheBox>
        <div>
            <JackInTheBox>
            <div className="buttonGroup">
                <div className="topbtn">
                    {topbtntext}
                </div>
                {
                    botbtntext && 
                    <div className="botbtn">
                    {botbtntext}
                    </div>
                }
                
            </div>
            </JackInTheBox>
            <img className='downarrow' src={arrow} alt="" />
        </div>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props=>`url("${props.bgimage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`
const Textarea = styled.div`
    padding-top: 15vh;
`
