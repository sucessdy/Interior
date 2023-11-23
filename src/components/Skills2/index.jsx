import React from 'react'
import skillsProgress from '../../common/skillsProgress';
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress()
  }, [])
    return (
      <div className="skills-sec section-padding pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="skills-box full-width">
                <div className="skill-item">
                  <h6>Digital Proficiency</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>Sustainability Expertise:
</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="75%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>Client-Centric Communication:</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h4 className="playfont line-height-50 mb-20">
                Mastering Modern Interior Design Trends
                </h4>
                <p className="mb-10">

In today&apos;  dynamic design landscape, Interior Wale excels with a trio of crucial skills. Our digital proficiency  integrating tools like AutoCAD and VR  ensures seamless communication. 
                </p>
                <p>
                Sustainability is inherent seen in our use of eco-friendly materials.  our client-centric approach that truly sets us apart—translating preferences into designs that exceed expectations. Interior Wale not only keeps up with trends but pioneers new standards in modern interior design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills2