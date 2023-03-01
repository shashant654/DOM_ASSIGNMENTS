const valuee = document.querySelector('.main__languages')
valuee.innerHTML = `
<span class="main__languages-text">
            Assignment - 1: Remove the languages that have 2.0 in their
            name(Every alternative language)
          </span>
          <br />
          Courses offered:
          <a target="_blank" href="https://www.ineuron.ai">JavaScript</a>
          <a target="_blank" href="https://www.ineuron.ai">React</a>
          <a target="_blank" href="https://www.ineuron.ai">Node</a>
          <a target="_blank" href="https://www.ineuron.ai">HTML & CSS</a>
          <a target="_blank" href="https://www.ineuron.ai">MERN</a>
`;

let val = document.querySelector('form')
val.innerHTML = `
<input
class="main__form-input"
type="text"
placeholder="ineuron"
disabled
/>
<button class="main__form-btn" type="submit" disabled>
Submit
</button>
`;