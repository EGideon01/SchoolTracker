import './App.css';


const App = () => {
  return (
    <main id="App">

      <div>
      <form>
        <label>
          Assignment:
          <input type="text" name="assignment" />
        </label>
          <input type="submit" value="Submit" id='assignment' />
      </form>
      </div>

      <div>
      <form>
        <label>
          Due Date:
          <input type="text" name="dueDate" />
        </label>
          <input type="submit" value="Submit" id='date'/>
      </form>
      </div>

      <div>
        <table>
          <tr>
            <th id='assignment'></th>
          </tr>
        </table>
      </div>

    </main>
  )
}

export default App
