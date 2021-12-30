import AboutContent from './AboutContent/AboutContent';
import ResumeContent from './ResumeContent/ResumeContent';
import DemosContent from './DemosContent/DemosContent';
import HobbiesContent from './HobbiesContent/HobbiesContent';

// all content components
const contentRoutes = {
    'About': <AboutContent />,
    'Resume': <ResumeContent />,
    'Demos': <DemosContent />,
    'Hobbies': <HobbiesContent />,
}

export const contentRoutesNames = Object.keys(contentRoutes);

const ContentRouter = ({ currentPath }) => {
    return contentRoutes[currentPath] || null;
}
  
export default ContentRouter