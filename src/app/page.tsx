import Flipbook, { type Page } from '@/components/Flipbook';
import Cover from '@/components/Cover';
import Intro from '@/components/Intro';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Sport from '@/components/Sport';
import Contact from '@/components/Contact';

const pages: Page[] = [
  { id: 'cover', no: '00', label: 'Cover', node: <Cover /> },
  { id: 'editorial', no: '01', label: 'Editorial', node: <Intro /> },
  { id: 'research', no: '02', label: 'Research', node: <Research /> },
  { id: 'timeline', no: '03', label: 'Timeline', node: <Timeline /> },
  { id: 'projects', no: '04', label: 'Projects', node: <Projects /> },
  { id: 'sport', no: '05', label: 'Sport', node: <Sport /> },
  { id: 'contact', no: '06', label: 'Contact', node: <Contact /> },
];

export default function Home() {
  return <Flipbook pages={pages} />;
}
