import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Gallery = () => {
    const [mouseEnteredFirstDiv, setMouseEnteredFirstDiv] = useState(false);
    const [mouseEnteredSecondDiv, setMouseEnteredSecondDiv] = useState(false);
    const [mouseEnteredThirdDiv, setMouseEnteredThirdDiv] = useState(false);

    const [modalFirstDiv, setModalFirstDiv] = useState(false);
    const [modalSecondDiv, setModalSecondDiv] = useState(false);
    const [modalThirdDiv, setModalThirdDiv] = useState(false);


    return (
        <>
            <div className="g-section-parent">

                {/* First division */}
                <div className="g-section-div1"
                    onMouseEnter={() => { setMouseEnteredFirstDiv(true) }}
                    onMouseLeave={() => { setMouseEnteredFirstDiv(false) }}

                    onClick={() => setModalFirstDiv(true)}
                >


                    <div className='g-section-numbers'>1</div>
                    <div>
                        FORMAL 'BUSINESS-TYPE' HEADSHOT
                    </div>
                    <br />
                    {
                        !mouseEnteredFirstDiv &&
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M9 9l5 12 1.774-5.226L21 14 9 9z" />
                            <path d="M16.071 16.071l4.243 4.243" />
                            <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                    }
                    {
                        mouseEnteredFirstDiv &&
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M9 9l5 12 1.774-5.226L21 14 9 9z" />
                            <path d="M16.071 16.071l4.243 4.243" />
                            <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                    }
                </div>
                {/*  */}

                {/* Second division */}
                <div className="g-section-div2"
                    onMouseEnter={() => { setMouseEnteredSecondDiv(true) }}
                    onMouseLeave={() => { setMouseEnteredSecondDiv(false) }}

                    onClick={() => { setModalSecondDiv(true) }}
                >
                    {
                        !mouseEnteredSecondDiv &&
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M9 9l5 12 1.774-5.226L21 14 9 9z" />
                            <path d="M16.071 16.071l4.243 4.243" />
                            <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                    }

                    {
                        mouseEnteredSecondDiv &&
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M9 9l5 12 1.774-5.226L21 14 9 9z" />
                            <path d="M16.071 16.071l4.243 4.243" />
                            <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                    }


                    <div className='g-section-numbers'>2</div>
                    <div>AESTHETIC SHOT</div>
                </div>
                {/*  */}

                {/* Third division */}
                <div className="g-section-div3"
                    onMouseEnter={() => { setMouseEnteredThirdDiv(true) }}
                    onMouseLeave={() => { setMouseEnteredThirdDiv(false) }}

                    onClick={() => { setModalThirdDiv(true) }}
                >

                    <div className='g-section-numbers'>3</div>
                    <div>IMAGE THAT REFLECTS YOUR PASSION IN LIFE</div>
                    <br />
                    {
                        !mouseEnteredThirdDiv &&
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M9 9l5 12 1.774-5.226L21 14 9 9z" />
                            <path d="M16.071 16.071l4.243 4.243" />
                            <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                    }
                    {
                        mouseEnteredThirdDiv &&
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M9 9l5 12 1.774-5.226L21 14 9 9z" />
                            <path d="M16.071 16.071l4.243 4.243" />
                            <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                    }


                </div>
                {/*  */}



                {/* Modal1 */}
                <Modal
                    size="xl"
                    show={modalFirstDiv}
                    onHide={() => setModalFirstDiv(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    style={{ fontFamily: 'monospace' }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            FORMAL 'BUSINESS-TYPE' HEADSHOT
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='blog-1-parent'>
                            <div className='blog-1-image'></div>
                            <div className='blog-1-content-div'>
                                <div className='blog-1-content'>
                                    This is a professional headshot taken with a careful balance
                                    of technical precision and aesthetic design. I selected an
                                    ambiance and setting that complement my formal attire, ensuring
                                    the overall tone aligns with the intended professional look.
                                    This image was taken with an iPhone 13, using its high-quality
                                    camera capabilities to create a clean, formal headshot suitable
                                    for professional settings.
                                    <hr />
                                    Technical properties-
                                    This image was captured using the wide camera setting at a focal
                                    length of 26mm with an aperture of f/1.6. These settings improved
                                    the brightness of the image while adding a blurred effect around
                                    the subject which is ideal for professional headshot. To reduce
                                    the effect of noise and to create a balance between sensitivity
                                    and noise reduction ISO 250 was chosen during the photography session.
                                    This image was shot at a faster shutter speed of 1/60s to avoid
                                    motion blur and capture a photograph with ample lighting effects.
                                    I was able to get a well-lit and crisp formal headshot with these
                                    properties that will complement a professional setting. The neutral
                                    and minimal colour palette of the outfit gave the image
                                    the impression of professional grade photos.
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                {/* Modal2 */}
                <Modal
                    size="xl"
                    show={modalSecondDiv}
                    onHide={() => setModalSecondDiv(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    style={{ fontFamily: 'monospace' }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            IMAGE THAT REFLECTS MY PASSION IN LIFE
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='blog-2-parent'>
                            <div className='blog-2-content-div'>

                                <div className='blog-2-content'>
                                    Using photography to connect with nature has been incredibly personal and
                                    enlightening for me. I can't help but want to capture pictures whenever I
                                    go for a stroll in the outdoors. The nature photographs I capture of flowers,
                                    beautiful mountains and serene lakes bring a profound sense of tranquility
                                    within me. Every picture depicts a unique moment with the vivid hues of the
                                    sky, the soft murmurs of the wind, the simplicity of a flower, and the
                                    glazing movement of the water.
                                    <hr />
                                    This image of a beautiful landscape in the midst of a forest at the University
                                    of Limerick was captured on a Google Pixel 7A with an ISO of 50 and an
                                    aperture of f/2.2. The faster shutter speed of 1/697 helped the photograph
                                    focus on the subject and slightly blur the background while showing the
                                    beautiful wildflowers and lush greenery. The contrast of the hues of sky and
                                    the blooming flowers were enhanced with the Ultra HD feature. When capturing
                                    the moments of reflection, I usually favour the unedited, raw version that
                                    the muted tones and natural lighting create. Despite their simple technical
                                    design, these photos truly reflect my desire to portray not only landscapes
                                    but also the spirit of peace and exploration in everyday life. For me,
                                    photography is more than just a skill; it's about capturing an emotion,
                                    a moment, and a connection to Mother Nature.
                                </div>
                            </div>
                            <div className='blog-2-image'></div>
                        </div>
                    </Modal.Body>
                </Modal>

                {/* Modal3 */}
                <Modal
                    size="xl"
                    show={modalThirdDiv}
                    onHide={() => setModalThirdDiv(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    style={{ fontFamily: 'monospace' }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            AESTHETIC SHOT
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='blog-3-parent'>
                            <div className='blog-3-content-div'>
                                <div className='blog-3-content'>
                                    This is an aesthetic shot of me on a serene, quiet urban street
                                    with my eyes closed and soft smile. The image was taken in a setting
                                    with golden hour, enhancing the simplicity and neutrality of my outfit.
                                    The natural light in the background adds warmth and brightness to the scene,
                                    while focusing on me as the subject.
                                    <hr />
                                    This photograph was taken in google pixel 7A with its vivid feature called
                                    ultra HD mode which enhances the contrast and brightness of minute details
                                    in both shadowed and bright spaces. This image is captured at F/1.9 aperture
                                    which helps to focus on the subject by subtly blurring out the background.
                                    The ISO 45 settings helped maintain the realistic look of the image by
                                    increasing sharpness and minimizing unwanted noise. The 1/578 shutter speed
                                    freezes any motion, adding clarity, especially in dynamic scenes. These
                                    settings helped in creating an image with portrait like quality enhancing
                                    the vibrance and clarity of the image.
                                </div>
                            </div>
                            <div className='blog-3-image'></div>
                        </div>
                    </Modal.Body>
                </Modal>


            </div>
        </>
    )
}

export default Gallery