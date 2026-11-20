import './CSS/ProjectPreview.css';
import ProjectImage from "./../../../../image.png";

function ProjectPreview() {
    return (
        <section className="project-preview">
            <div className="project-preview-content">
                <span className="section-label">OPEN SOURCE PROJECT</span>
            </div>

            <div className="project-preview-image">
                <img
                    src={ProjectImage}
                    alt="LinuxSystemDetector application screenshot"
                />
            </div>
        </section>
    );
}

export default ProjectPreview;