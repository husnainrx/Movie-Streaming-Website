import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div id="team" className="content-section"> {/* Added content-section class */}
        <table border="1" cellPadding="10" cellSpacing="0">
          <tbody>
            <tr style={{ backgroundColor: 'var(--accent-color)' }}> {/* Changed to use CSS variable */}
              <th colSpan="4">Our Team</th>
            </tr>
            <tr>
              <td><img src="/husnain.jpeg" alt="Husnain" /></td>
              <td>Husnain Rehman</td>
              <td>Frontend Developer</td>
              <td>Designed the structure and layout of Movie Stream using HTML, creating a seamless and immersive user experience.</td>
            </tr>
            <tr>
              <td><img src="/ibrahim.jpeg" alt="Ibrahim" /></td>
              <td>Ibrahim Nadeem</td>
              <td>Content Manager</td>
              <td>Curates movie reviews, trailers, and descriptions to keep the site content fresh and engaging.</td>
            </tr>
            <tr>
              <td><img src="/hassan.jpeg" alt="Hassan" /></td>
              <td>Muhammad Hassan</td>
              <td>Backend Developer</td>
              <td>Handles movie data integration and ensures smooth streaming functionality across various platforms.</td>
            </tr>
            <tr>
              <td><img src="/hamid.jpeg" alt="Hamid" /></td>
              <td>Muhammad Hamid</td>
              <td>Marketing Strategist</td>
              <td>Leads marketing campaigns, partnerships, and brand presence to ensure Movie Stream reaches movie lovers everywhere.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="contact-link">
        <Link to="/">← Back to Home</Link>
      </div>
    </>
  );
};

export default About;
