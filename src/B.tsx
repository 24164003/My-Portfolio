import { useState } from 'react'
import coffeevideo from '../public/coffeevideo.mp4'

const B = () => {

  const prevSymbol = "<";
  const nextSymbol = ">";

  const [currentImage, setCurrentImage] = useState('gallery-section-image-1');

  const switchPhotos = () => {
    if (currentImage === 'gallery-section-image-1') {
      setCurrentImage('gallery-section-image-3');
    }
    else if (currentImage === 'gallery-section-image-2') {
      setCurrentImage('gallery-section-image-1');
    }
    else if (currentImage === 'gallery-section-image-3') {
      setCurrentImage('gallery-section-image-2');
    }
  };

  return (
    // <div className='gallery-section-parent'>
    //   <div className="gallery-section-image-parent" style={{ background: 'white', display: 'flex' }}>
    //     <div className='gallery-section-nav'
    //       onClick={() => switchPhotos()}
    //     >{prevSymbol}</div>
    //     <div style={{ width: '90%' }} className={currentImage}>
    //     </div>
    //     <div className='gallery-section-nav'
    //       onClick={() => switchPhotos()}
    //     >{nextSymbol}</div>
    //   </div>
    // </div>
    <div className='blog-parent-section'>
      <video src={coffeevideo} controls className='blog-video-section'></video>
      <div className='blog-content-section'>
        <div className='blog-content1'>
          Our videography assignment began with four team members brainstorming ideas for an
          advertisement from a student's perspective. Each of us discussed our insights and the
          difficulties we experience in our day to day lives. The discussion led to several
          innovative ideas, including a multipurpose snack appropriate for both vegetarians
          and non-vegetarians, an advertisement for jewellery to enhance confidence, and a
          safety device for emergency situations such as stalking, kidnapping. After analysing
          each concept and gathering inputs, we decided to focus on advertising a safety gadget,
          emphasising its relevance in maintaining personal security.
          <br />
          <br />
          We began with scripts and a storyboard that showcased how the safety gadget works.
          However,the shoot did not go as planned due to miscommunication and inadequate planning.
          Because it was an outdoor production, the constant flow of people made it difficult to
          adhere to our plan. Furthermore, the changing  weather disrupted the lighting and the
          continuity between shots. Overall, it was a chaotic experience.
          After identifying the flaws in our initial outdoor shoot, we determined that an indoor
          setting would be more practical and feasible given our limited time frame. This
          understanding prompted us to conduct a new brainstorming session, during which we looked
          at a variety of products that would be more suited for an indoor shoot. After numerous
          ideas and confusion, we decided on coffee powder—a product that not only fit our setup
          but also spoke to all of us. As students, we were aware of the importance coffee had in
          fuelling late-night study sessions
          <br />
          <br />
          That's when the idea for "Wake Up Your Best" emerged. Our goal was to convey the typical
          late-night struggle: tired eyes, endless assignments, and looming deadlines—with coffee
          serving as the unsung hero, leading you through it all. The advertisement was more than
          just marketing coffee; it was also selling it as a reliable companion. We wanted to highlight
          how coffee not only wakes you up but also sparks your drive, encouraging you to keep going
          even when you want to give up. It's about waking potential, like a dependable friend who is
          always there to assist you and get through your challenges.
          <br />
          <br />
          We took the time to assign the roles of each team member and focused on pre-production 
          planning to make sure we didn't repeat 4mistakes as our last shoot. This time, we took 
          care to ensure that we had a well-thought-out strategy that addressed every aspect, 
          including the plot, lighting, continuity, set design, costumes, and audio. To make sure 
          everything went without a hitch, we meticulously planned out every shot. I was tasked with 
          overseeing continuity and photographic direction, ensuring that each shot flowed naturally 
          together.As the Director of Photography and Continuity, I was responsible for ensuring 
          both the visual and narrative integrity of the advertisement. This involved selecting 
          camera angles, lighting setups, and the overall visual aesthetic to create a coherent and 
          engaging story. Each shot was crafted to maintain audience interest, with a focus on smooth 
          transitions between scenes.
          <br />
          <br />
          To achieve this, we used an iPhone 13, filming in 4K HD at 60 frames per second for a 
          high-quality, crisp look. The choice of 60fps allowed for smooth motion, which is crucial 
          for maintaining the flow of visuals and highlighting finer details. For lighting, we chose 
          a dim setting,along with a ring light to emphasise the subject. The dim light created a warm, 
          cosy atmosphere suitable for the comfort and warmth associated with coffee. The ring light, 
          focused on the subject, added clarity without overwhelming the scene. Maintaining shot stability 
          was critical; It was difficult to ensure the footage remained steady, avoiding distractions from 
          shaky movements. I paid particular attention to continuity—tracking actors' positions, maintaining 
          consistent prop placement, and ensuring lighting was similar between takes to avoid any visual 
          discrepancies. This focus on detail was essential for sustaining the ad's visual coherence and 
          conveying the narrative seamlessly.
          <br />
          <br />
          Our goal was to bring the concept to life visually, showing coffee as a comforting and dependable 
          companion. By carefully balancing technical details and storytelling, I aimed to create an emotional 
          connection that would resonate with our audience.I’m most proud of how the final ad captured the 
          tone we wanted. It was powerful to see the student's journey, from struggling to succeeding with 
          the help of coffee. It wasn't just about selling coffee; it celebrated the determination of students 
          everywhere. The ad ended with the coffee brand's logo and the motto, "Awaken Your Potential," perfectly 
          wrapping up a project that taught us about planning, teamwork, and storytelling. This experience was a 
          reminder that every polished ad comes from a team overcoming challenges, learning from mistakes, and 
          working to make something genuine. It was a rewarding journey to see our initial chaos turn into a 
          meaningful story, one cup of coffee at a time.
        </div>
      </div>
    </div>
  )
}

export default B