import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Fuse from 'fuse.js';

// Import CSS
import '../css/style.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Import core modules
import './script.js';

// Import Data - We might need to refactor data loading if these are large objects
import './data/index.js';
import './data/modules/coletivo.js';
import './data/modules/duvidas.js';
import './data/modules/eSocial.js';
import './data/modules/financeiro.js';
import './data/modules/formatacao.js';
import './data/modules/gerenciamento_de_riscos.js';
import './data/modules/problemas.js';

// Make libraries available globally if your legacy code relies on window.marked etc.
window.marked = marked;
window.DOMPurify = DOMPurify;
window.Fuse = Fuse;
