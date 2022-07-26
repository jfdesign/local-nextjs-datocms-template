import {useEffect} from 'react'

export default function Modal({props, onClose}) {
  
  useEffect(() => {
    
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        onClose()
      }
    };
    
    window.addEventListener('keydown', handleEsc);

    //removes listenter when not avaialble
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };

  }, []);


  if(!props.show) return null
  
  return(
    <div className="modalC" onClick={onClose}>
      
      <div className="modal">
        <button className="closeBtn" onClick={onClose}>X</button>
        {props.data}
      </div>
    </div>
    
  )
}