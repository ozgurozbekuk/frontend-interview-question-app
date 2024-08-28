import React, { useEffect, useState } from 'react'
import "../../../components/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight , faArrowLeft , faHouse} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';


function Reactque( ) {

  const [reactQuestion,setReactQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [quesNumber , setQuesNumber] = useState(0)
  
const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />
const homeIcon = <FontAwesomeIcon icon={faHouse} />


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('./data/questions/react.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setReactQuestion(result);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        
      }
    };

    fetchData();

  },[])

  
  const firstQuestion =reactQuestion.length > 0 ? reactQuestion[quesNumber] : "";

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setIsVisible(false)
      setQuesNumber((prevQuesNumber) => {
        return prevQuesNumber < 95 ? prevQuesNumber + 1 : 0;
      });
    } else if (event.key === 'ArrowLeft') {
      setIsVisible(false)
      setQuesNumber((prevQuesNumber) => {
        return prevQuesNumber > 0 ? prevQuesNumber - 1 : 95;
      });
    }
  };
 
  function clickHandleRight() {
    if(firstQuestion.id < 96) 
      {setQuesNumber(quesNumber + 1)}else {
        setQuesNumber(0)
      }
    setIsVisible(false)
  }

  function clickHandleLeft() {
    if(quesNumber > 0){

      setQuesNumber(quesNumber - 1)
    }else {
      setQuesNumber(95)
    }
    setIsVisible(false)
  }
  
  function viewAnswer() {
    setIsVisible(!isVisible)
  }

  function clickHome() {
    setIsVisible(false)
  }


  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setIsVisible(false)
      setQuesNumber((prevQuesNumber) => {
        return prevQuesNumber < 95 ? prevQuesNumber + 1 : 0;
      });
    } else if (direction === 'right') {
      setIsVisible(false)
      setQuesNumber((prevQuesNumber) => {
        return prevQuesNumber > 0 ? prevQuesNumber - 1 : 95;
      });
    }
  };

  
  return (
    <div {...handlers} className='question-container' >
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="icons-container">
          <i className={"icon left"}  onClick={clickHandleLeft}>{leftArrow}</i>
          <Link to="/"><i className='icon home' onClick={clickHome}>{homeIcon}</i></Link>
          <i className='icon right' onClick={clickHandleRight}>{rightArrow}</i>
      </div>
      <div className='questionCard' key={firstQuestion.id}>
        <p className='question'><span>{firstQuestion.id}</span> - {firstQuestion.question}</p>
        <button className='view-answer' onClick={viewAnswer}>View Answer</button>

        <p className={isVisible ? "answer-active" : "answer"}>- {firstQuestion.answer}</p>
      </div>
    </div>
  )
}

export default Reactque;


