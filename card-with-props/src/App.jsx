import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className='App'>
      <Card url="src/assets/sample-img.jpg" lable='ONLINE' rating='4.6' ratingCount='827492' title='Good habits of effective people' price='121' />
      <Card url='src/assets/profile-img.jpg' lable='COD' rating='3.0' ratingCount='923' title='Atomic habits' price='78' />
      <Card url="src/assets/sample-img.jpg" lable='PDF' rating='4.6' ratingCount='8292' title='The legend of bhagatsingh' price='79' />
      <Card url='src/assets/profile-img.jpg' lable='SOLD OUT' rating='1.5' ratingCount='827' title='7 habits of effective people' price='121' />
      <Card url="src/assets/sample-img.jpg" lable='ONLINE' rating='4.6' ratingCount='827492' title='Singing lessonns of 00s' price='78' />
      <Card url='src/assets/profile-img.jpg' lable='NOT AVAILABLE' rating='4.6' ratingCount='827492' title='7 habits of highly effective people' price='40' />
      <Card url="src/assets/sample-img.jpg" lable='ONLINE' rating='5.0' ratingCount='827492' title='7 habits of effective people' price='10' />
      <Card url='src/assets/profile-img.jpg' lable='ONLINE' rating='4.6' ratingCount='827492' title='Hall of fame' price='78' />
      <Card url="src/assets/sample-img.jpg" lable='OFFLINE' rating='4.0' ratingCount='2' title='My autobiography' price='40' />
      <Card url='src/assets/profile-img.jpg' lable='ONLINE' rating='3.6' ratingCount='8273492' title='7 habits of effective people' price='121' />
    </div>
  )
}



export default App
