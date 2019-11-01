import React from 'react'
import ReactDOM from 'react-dom';
import data from "../mockdata.json";


/**
 * Returns whether skill is within skillList.
 * Case does not matter.
 * 
 * @param {string} skill The skill
 * @param {string} skillList The skillList
 * @returns {boolean}
 */
function InSkillList(props){
  for (let i = 0; i < props.skillList.length; i++){
    if (props.skillList[i].toLowerCase().includes(props.skill.toLowerCase())){
      return true;
    }
  }
  return false;
}


// TODO Additional parameters?
/**
 * Returns whether keyword is within eventContent.
 * Case does not matter.
 * 
 * @param {string} keyword The keyword
 * @param {string} eventContent The eventContent
 * @returns {boolean}
 */
function CheckContent(props){
  // Currently it just checks whether the keyword is in the title.
  if (props.eventContent.toLowerCase().includes(props.keyword.toLowerCase()) &&
      InSkillList({skillList: props.skillList, skill: props.skill})){
    return true;
  }
  return false;
}

/**
 * Renders the new page of events depending on what is in the search bar.
 */
function Update(){
  const events = data.events;

  const skillToLookup = document.getElementById("skill").value;
  const keywordToLookup = document.getElementById("keyword").value;

  const element = (
    <div id="root">
      <h1>Browse For Events</h1>
      Skills <input id="skill" type="text" className="input" 
              placeholder="Search for a skill..." onChange={Update}
              value={skillToLookup}/>
      Keyword <input id="keyword" type="text" className="input" 
              placeholder="Search for an event..." onChange={Update}
              value={keywordToLookup}/>
      <ul>
        <BrowseEntries eventsList={events} keyword={keywordToLookup}
                       skill={skillToLookup}/>
      </ul>
    </div>)
  ReactDOM.render(element, document.getElementById("root"));
}

/**
 * Formats the list of skills in an unordered list.
 * 
 * @param {string} skillsList The list of skills.
 * @returns {JSX.Element}
 */
function Skills(props){
  let skills = [];

  for (let i = 0 ; i < props.skillsList.length; i++) {
    skills.push(<li key={props.skillsList[i]}>
      {props.skillsList[i]}
      </li>);
  }

  return skills;
}

/**
 * Formats the list of events in an unordered list.
 * 
 * @param {string} eventsList The list of events.
 * @param {string} keyword The keyword to filter events.
 * @param {string} skill The skill to filter events.
 * @returns {JSX.Element}
 */
function BrowseEntries(props){
  let entries = [];

  // Iterate through each event.
  for (let i = 0 ; i < props.eventsList.length; i++) {
    // Check whether the event should be included.
    if (CheckContent({keyword: props.keyword,
                      skill: props.skill,
                      skillList: props.eventsList[i].skills,
                      eventContent: props.eventsList[i].name})){
      entries.push(<li key={props.eventsList[i].id}>
        {props.eventsList[i].name}
        <ul>
          <li>
            Date:
            {new Date(props.eventsList[i].date).toDateString()}
          </li>
          <li>
            Posted Date:
            {new Date(props.eventsList[i].posteddate).toDateString()}
          </li>
          <li>
            Skills Required:
            <ul> 
              <Skills skillsList = {props.eventsList[i].skills}> </Skills>
            </ul>
          </li>
          <li>
            Address: {props.eventsList[i].address}
          </li>
          <li>
            Description: {props.eventsList[i].description}
          </li>
          <li>
            Organizer: {props.eventsList[i].organizer}
          </li>
        </ul>
        </li>);
    }
  }

  return entries;
}

const Browse = props => {
  const events = data.events;
  return (
    <div id="root">
      <h1>Browse For Events</h1>
      Skills <input id="skill" type="text" className="input" 
              placeholder="Search for a skill..." onChange={Update}/>
      Keyword <input id="keyword" type="text" className="input" 
              placeholder="Search for an event..." onChange={Update}/>
      <ul>
        <BrowseEntries eventsList={events} keyword=""
                       skill=""/>
      </ul>
    </div>
    );
};

export default Browse;