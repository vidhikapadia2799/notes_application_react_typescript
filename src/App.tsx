import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Daily Scrum Meeting",
      text: "Schedule meeting with Omneship team for Daily Updates",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <div className="App">
      <>
        <Header />
        <Container className="mt-5">
          <Row>
            <Col>
              <NotesList notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CreateNotes notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
