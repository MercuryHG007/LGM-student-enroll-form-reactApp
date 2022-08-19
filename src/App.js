import { useState } from 'react';
import './App.css';

function App() {

  const [studentList, setStudentList] = useState([])
  const [stName, setStName] = useState('');
  const [stEmail, setStEmail] = useState('');
  const [stWebsite, setStWebsite] = useState('');
  const [stImage, setStImage] = useState('');
  const [stGender, setStGender] = useState('');
  const [stSkills, setStSkills] = useState('');

  function handleSubmit(e)  {
    let temp = {
      name: stName,
      email: stEmail,
      web: stWebsite,
      image: stImage,
      gender: stGender,
      skills: stSkills
    }
    console.log(temp)
    const updatedList = [...studentList]
    updatedList.push(temp);
    setStudentList(updatedList)
    console.log(updatedList)
    setStName('')
    setStEmail('')
    setStWebsite('')
    setStImage('')
    setStGender('')
    setStSkills('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Student Enrollement Form </h1>
      </header>
      <div className='main-container'>
        <div className='form-container'>
          <form>

            <div className='input-container'>
              <label for='StName' >Name</label>
              <input 
                name='StName' 
                type="text" 
                value={stName}
                required
                onChange = { (e) => setStName(e.target.value) }  
              ></input>
            </div>
            
            <div className='input-container'>
              <label for='StEmail'>Email</label>
              <input 
                name='StEmail' 
                type="email"
                value={stEmail}
                required
                onChange = { (e) => setStEmail(e.target.value) }
              ></input>
            </div>
            
            <div className='input-container'>
              <label for='StWebsite'>Website</label>
              <input 
                name='StWebsite' 
                type="url"
                value={stWebsite}
                required
                onChange = { (e) => setStWebsite(e.target.value) }
                ></input>
            </div>
            
            <div className='input-container'>
              <label for='StImage' >Image</label>
              <input 
                name='StImage' 
                type="url"
                value={stImage}
                required
                onChange = { (e) => setStImage(e.target.value) }
                ></input>
            </div>
            
            <div className='input-container gender'>
              <label for='StGender'>Gender</label>
              <div className='gender-container'>
                <div>
                  <input 
                    name='StGender' 
                    type="radio" 
                    value="Male"
                    checked={stGender==='Male'}
                    required
                    onChange = { (e) => setStGender(e.target.value) }
                  ></input>
                  <label for='Male'>Male</label>
                </div>
                <div>
                  <input 
                    name='StGender' 
                    type="radio" 
                    value="Female"
                    checked={stGender==='Female'}
                    onChange = { (e) => setStGender(e.target.value) }
                    ></input>
                  <label for='Female'>Female</label>
                </div>
              </div>

            </div>
            
            <div className='input-container'>
              <label>Skills</label>
              <input 
                type='text'
                name='StSkills'
                value={stSkills}
                required
                onChange = { (e) => setStSkills(e.target.value) }
                placeholder="HTML, CSS, JS..."  
              ></input>
            </div>

            <button type='button' onClick={handleSubmit}>Submit</button>
          </form>
        </div>

        <hr/>

        <div className='view-container'>
          {(studentList.length>0)?
          <table className='student-table'>
            <thead>
              <th className='left'>
                Description
              </th>
              <th className='right'>
                Image
              </th>
            </thead>

            <tbody>
              {studentList && studentList.map((student,index) => (
                <tr
                  key={index}
                  className='student-container'
                >
                  <td className='left'>
                    <h3>{student.name}</h3>
                    <p>{student.gender}</p>
                    <p>{student.email}</p>
                    <a href={student.web} target='_blank' rel='noreferrer'>{student.web}  </a>
                    <p>{student.skills}</p>
                  </td>

                  <td className='right'>
                    <div>
                      <img src={student.image} alt='student_image'></img>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          :
          <p>
            No Data Available
          </p>
          }
        </div>

      </div>
    </div>
  );
}

export default App;
