import assg1photo1 from '../public/assignment1/PHOTO-2025-02-16-11-15-19 (1).jpg';
import assg1photo2 from '../public/assignment1/PHOTO-2025-02-16-11-15-19 (2).jpg';
import assg1photo3 from '../public/assignment1/PHOTO-2025-02-16-11-15-19 (3).jpg';
import assg1photo4 from '../public/assignment1/PHOTO-2025-02-16-11-15-19.jpg';

import assg2pdf from '../public/assignment2/Asiignment_2.pdf'

const Projects = () => {
    return (
        <div className="projects-container">
            {/* Project 1 */}
            <h1 className="project-title">1. Welcome to the World of Art Dice</h1>

            <div className="image-gallery">
                <img src={assg1photo1} alt="Art Dice 1" className="project-image" />
                <img src={assg1photo2} alt="Art Dice 2" className="project-image" />
                <img src={assg1photo3} alt="Art Dice 3" className="project-image" />
                <img src={assg1photo4} alt="Art Dice 4" className="project-image" />
            </div>


            <p className="project-description">
                Art Dice is a game where creativity and randomness collide to create a truly unique and colorful masterpiece. The premise is simple:
                using two dice rolls, you will determine the direction and length of each line you draw, and color will be assigned based on the outcome.
                This game is a fun way to explore how randomness can inspire artwork, turning the unpredictability of dice into structured artistic expression.
            </p>

            <div style={{ fontFamily: 'Mono, monospace', margin: '0 auto', maxWidth: '800px' }}>
                <h2 style={{
                    fontSize: '2em',
                    color: '#D67A7A',
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                }}>
                    Rules of the Game:
                </h2>

                <ul style={{
                    listStyleType: 'none',
                    paddingLeft: '0',
                    fontSize: '1.1em',
                    color: '#e0e0e0',
                    lineHeight: '1.6',
                }}>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Roll the Dice:</strong> Roll two dice. The first number represents the length of the line you will draw. The second number determines the direction of the line.
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Assign the Direction and Color:</strong>
                        <ul style={{
                            marginLeft: '20px',
                            listStyleType: 'circle',
                            marginTop: '10px',
                        }}>
                            <li>Even and Even: Draw the line up (Color: Red).</li>
                            <li>Odd and Odd: Draw the line down (Color: Blue).</li>
                            <li>Odd and Even: Draw the line left (Color: Green).</li>
                            <li>Even and Odd: Draw the line right (Color: Orange).</li>
                        </ul>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Drawing Process:</strong> After each roll, draw the line according to the direction and length dictated by the dice. Continue rolling and drawing lines until you feel your artwork is complete. Feel free to experiment with overlapping lines and different colors to enhance your masterpiece!
                    </li>
                </ul>
            </div>


            <p className="project-description">
                <h2>Conclusion:</h2>
                Through creating Art Dice, I learned how randomness can be harnessed as a tool for creativity. The unpredictable nature of the dice rolls challenged my artistic instincts, allowing me to break free from the constraints of planned design. I discovered how a structured set of rules could bring order to chaos, and how these random elements could lead to surprising and unique visual outcomes. The experience highlighted how art can emerge from unexpected places, and how a simple game can ignite new artistic ideas and possibilities.
            </p>

            {/* Project 2 */}
            <h1 className="project-title">2. Interactive Story Board</h1>

            <p className="project-description">
                {/* Text before the link */}
                To learn more about this project, click on the link below to view the full project documentation in PDF format:
                <br />

                {/* PDF Link */}
                <a
                    href={assg2pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#D67A7A',
                        textDecoration: 'underline',
                        fontWeight: 'bold'
                    }}
                >
                    View Interactive Story Board PDF
                </a>

                <br />
                The document contains detailed information and visuals to better understand the project.
            </p>

            {/* Project 3 */}
            <h1 className="project-title">3. Algorithmic Soundscape Performance</h1>

            

            <footer>
                <p>&copy; 2024 Shonal Maria. All Rights Reserved.</p>
                <p>"DESIGNER DEVOTED TO CREATING MEMORABLE EXPERIENCES"</p>
            </footer>
        </div>
    );
};

export default Projects;
