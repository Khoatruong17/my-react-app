import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';

export default function Board() {
  return (
    <div className="center">
      <div id="board">
        <div id="tile-0" className="tile">
          <input type="radio" id="cell-0-x" name="cell-0" />
          <input type="radio" id="cell-0-o" name="cell-0" />
          <label htmlFor="cell-0-x"></label>
          <label htmlFor="cell-0-o"></label>
          <div></div>
        </div>
        <div id="tile-1" className="tile">
          <input type="radio" id="cell-1-x" name="cell-1" />
          <input type="radio" id="cell-1-o" name="cell-1" />
          <label htmlFor="cell-1-x"></label>
          <label htmlFor="cell-1-o"></label>
          <div></div>
        </div>
        <div id="tile-2" className="tile">
          <input type="radio" id="cell-2-x" name="cell-2" />
          <input type="radio" id="cell-2-o" name="cell-2" />
          <label htmlFor="cell-2-x"></label>
          <label htmlFor="cell-2-o"></label>
          <div></div>
        </div>
        <div id="tile-3" className="tile">
          <input type="radio" id="cell-3-x" name="cell-3" />
          <input type="radio" id="cell-3-o" name="cell-3" />
          <label htmlFor="cell-3-x"></label>
          <label htmlFor="cell-3-o"></label>
          <div></div>
        </div>
        <div id="tile-4" className="tile">
          <input type="radio" id="cell-4-x" name="cell-4" />
          <input type="radio" id="cell-4-o" name="cell-4" />
          <label htmlFor="cell-4-x"></label>
          <label htmlFor="cell-4-o"></label>
          <div></div>
        </div>
        <div id="tile-5" className="tile">
          <input type="radio" id="cell-5-x" name="cell-5" />
          <input type="radio" id="cell-5-o" name="cell-5" />
          <label htmlFor="cell-5-x"></label>
          <label htmlFor="cell-5-o"></label>
          <div></div>
        </div>
        <div id="tile-6" className="tile">
          <input type="radio" id="cell-6-x" name="cell-6" />
          <input type="radio" id="cell-6-o" name="cell-6" />
          <label htmlFor="cell-6-x"></label>
          <label htmlFor="cell-6-o"></label>
          <div></div>
        </div>
        <div id="tile-7" className="tile">
          <input type="radio" id="cell-7-x" name="cell-7" />
          <input type="radio" id="cell-7-o" name="cell-7" />
          <label htmlFor="cell-7-x"></label>
          <label htmlFor="cell-7-o"></label>
          <div></div>
        </div>
        <div id="tile-8" className="tile">
          <input type="radio" id="cell-8-x" name="cell-8" />
          <input type="radio" id="cell-8-o" name="cell-8" />
          <label htmlFor="cell-8-x"></label>
          <label htmlFor="cell-8-o"></label>
          <div></div>
        </div>
      </div>
      <div id="end">
        <div id="message">
          <input type="button" value="Restart" />
        </div>
      </div>
    </div>
  );
}

