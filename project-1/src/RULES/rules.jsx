import './rules.css';
import { useNavigate } from 'react-router-dom';

function Rules() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/mcq");
  };
  
  return (
    <div className="rules_container">
      <div className='brand'>
        <div className='o1'>Login</div>
        <div className='o2'>360</div>
      </div>
        <h1 className='rules_h1'>Instructions</h1>
        <div className='instructions'>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem dolore, corporis molestiae dolorum et ipsa culpa similique sed laboriosam?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa doloremque vel corrupti veritatis perferendis.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ut, fugit odit magni temporibus non iste sequi unde.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nisi amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, rem? Ipsa, voluptates adipisci? Aliquid cum placeat perferendis alias nisi dolor vel saepe illo!</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus vitae nobis nostrum fugiat rem est repudiandae.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur maxime beatae blanditiis molestias reprehenderit ea exercitationem ab, iusto sed provident earum quia!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, praesentium.</li>
            
          </ul>
        </div>
        
        <button className='rules_btn' type="submit" onClick={handleSubmit}>Done</button>
    </div>
  );
}

export default Rules;