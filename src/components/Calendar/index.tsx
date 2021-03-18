import { FormEvent, useCallback, useState} from 'react';
import DayPicker, {DayModifiers} from 'react-day-picker';
import Modal from 'react-modal';
import {BiPlusCircle} from 'react-icons/bi'
import { Container, Content, ContentDay, Reminder, ContainerForm} from './style';
import 'react-day-picker/lib/style.css'

export function Calendar()  {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [getReminder, setGetReminder] = useState('');
  const [color, setColor] = useState('')
  const [hour, setHour] = useState('')
  const [data, setData] = useState<any>()
  const [inNewReminderModalOpen, setIsNewReminderModalOpen] = useState(false)

  function handleOpenNewReminderModal () {
    setIsNewReminderModalOpen(true)
  }

  function handleCloseNewReminderModal () {
    setIsNewReminderModalOpen(false)
  }

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if(modifiers.available) {
      setSelectedDate(day)
    }
  },[])

  function handleCreateNewReminder(event: FormEvent) {
    event.preventDefault()
    setData({
      color,
      hour,
      getReminder,
    })
  }

  function renderDay (day: Date) {
    const date = day.getDate()

    return (
      <ContentDay>
        <Reminder>
          <div className="content-box-remider-one">
            <p>{date}</p>
            <button onClick={handleOpenNewReminderModal}>
              <BiPlusCircle size={22} color='#999'/>
            </button>
          </div>

          {data && (
            <div style={{background: `${data.color ? data.color : '#ddd'}`}}>
              <p>{data.getReminder}</p>
              <p>{data.hour}</p>
            </div>
          )}
        </Reminder>
      </ContentDay>
    )
  }

  return (
   <Container>
      <Content>
      <DayPicker
        fromMonth={new Date()}
        disabledDays={[
          {daysOfWeek: [0, 6]}
        ]}
        showOutsideDays
        modifiers={{
          available: {daysOfWeek: [1,2,3,4,5,6]},
        }}
        selectedDays={selectedDate}
        onDayClick={handleDateChange}
        weekdaysShort={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
        renderDay={renderDay}
      />
    </Content>

    <Modal
      isOpen={inNewReminderModalOpen}
      onRequestClose={handleCloseNewReminderModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

    <ContainerForm onSubmit={handleCreateNewReminder}>
      <h2>Reminder</h2>

      <input
        value={getReminder}
        onChange={(event) => setGetReminder(event.target.value)}
        placeholder="Reminder..."
      />

      <input
        type="time"
        value={hour}
        placeholder="Time"
        onChange={(event) => setHour(event.target.value)}
      />

      <input
        style={{padding: 10, height: 50}}
        type="color"
        list={color}
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />

      <div className="btn">
        <button type="submit">
          Register
        </button>

        <button type="button" onClick={handleCloseNewReminderModal}>
          Cancel
        </button>
      </div>
    </ContainerForm>

    </Modal>
   </Container>
  )
}
