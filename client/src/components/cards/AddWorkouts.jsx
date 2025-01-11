import styled from 'styled-components';
import TextInput from '../TextInput';
import  Button  from '../Button';

const Card = styled.div`
border: 1px solid ${({ theme }) => theme.text_primary + 20};
border-radius: 14px;
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
display: flex;
flex-direction: column;
gap: 6px;
@media (max-width: 600px) {
  padding: 16px;
}`;
const Title = styled.div`
 font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }`;


const AddWorkouts = ({workout,setWorkout}) => {
   
  return (
    <Card>
      <Title>Add Your Workout</Title>
     <TextInput 
      textArea
      rows={10}
      placeholder={`Enter details in the following format:

      # Category
      - Workout Name
      - Sets
      - Reps
      - Weight
      - Duration`}
     value={workout}
     handelChange={(e)=>setWorkout(e.target)} />
     <Button text="Add Workout" small/>
    </Card>
  )
}

export default AddWorkouts