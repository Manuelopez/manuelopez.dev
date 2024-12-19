import { useState } from 'react';
import { useParams } from 'react-router';
import { dsAlgoData } from '../data';
import ts from 'typescript';
import Modal from 'react-modal';

Modal.setAppElement('#root');
export function Problem() {
  const params = useParams() as { ds: 'array'; pId: string };

  const currData = dsAlgoData[params.ds];
  const [title] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].title,
  );
  const [description] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].description,
  );

  const [constraints] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].constraints,
  );
  const [tests] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].tests,
  );
  const [code, setCode] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].codeStarter,
  );
  const [currentlyExplaning, setCurrentlyExplaining] = useState({
    text: '',
    line: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatorCode, setGeneratorCode] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].codeStarter,
  );
  const [linesExplanation, setLineExplanation] = useState<string[]>([]);
  const [testter, setTester] = useState<null | Generator<unknown, any, any>>(
    null,
  );

  const [currentTestVariables, setCurrentTestVariables] = useState<null | any>(
    null,
  );

  const [ideas, setIdeas] = useState<
    {
      title: string;
      steps: string;
      timeComplexity: string;
      spaceComplexity: string;
    }[]
  >([
    {
      title: 'test1',
      steps: 'test steps',
      timeComplexity: 'N',
      spaceComplexity: 'LogN',
    },
  ]);
  let [explained, setExplained] = useState(0);

  const [currentTab, setCurrentTab] = useState(0);
  const [currentTabRight, setCurrentTabRight] = useState(0);

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <h1>{title}</h1>
      <div>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '20%',
            listStyle: 'none',
            padding: 0,
            justifyContent: 'space-between',
          }}
        >
          <li
            onClick={() => {
              setCurrentTab(0);
            }}
          >
            Description
          </li>
          <li
            onClick={() => {
              setCurrentTab(1);
            }}
          >
            Canvas
          </li>
          <li
            onClick={() => {
              setCurrentTab(2);
            }}
          >
            Tests
          </li>
        </ul>
      </div>
      <div
        id='parent'
        style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
      >
        <div id='left' style={{ width: '40%' }}>
          {currentTab === 0 && (
            <>
              <p>{description}</p>
            </>
          )}
          {currentTab === 1 && (
            <>
              <div>
                <h2>Constraints</h2>
                <ul>
                  {constraints.map((c, i) => {
                    return <li key={`constrains-${i}`}>{c}</li>;
                  })}
                </ul>
              </div>
              <div
                style={{
                  borderTop: '2px solid black',
                  borderBottom: '2px solid black',
                  borderLeft: '2px solid black',
                }}
              >
                <h2>Ideas</h2>

                <hr
                  style={{ padding: 'none', marginTop: 0, marginBottom: 0 }}
                />
                {ideas.map((i, idx) => {
                  return (
                    <div key={`idea-${idx}`} style={{ width: '100%' }}>
                      <input
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          display: 'inline',
                          padding: 'none',
                        }}
                        onChange={(e) => {
                          let copy = JSON.parse(
                            JSON.stringify(ideas),
                          ) as typeof ideas;
                          copy[idx].title = e.target.value;
                          setIdeas(copy);
                        }}
                        value={i.title}
                      ></input>
                      <div style={{ display: 'flex' }}>
                        <textarea
                          onChange={(e) => {
                            let copy = JSON.parse(
                              JSON.stringify(ideas),
                            ) as typeof ideas;
                            copy[idx].steps = e.target.value;
                            setIdeas(copy);
                          }}
                          style={{ width: '50%' }}
                          value={i.steps}
                        />
                        <div style={{ width: '50%' }}>
                          <div>
                            Time Complexity
                            <input
                              style={{
                                width: '100%',
                                border: 'none',
                                display: 'inline',
                                padding: 'none',
                              }}
                              onChange={(e) => {
                                let copy = JSON.parse(
                                  JSON.stringify(ideas),
                                ) as typeof ideas;
                                copy[idx].timeComplexity = e.target.value;
                                setIdeas(copy);
                              }}
                              value={i.timeComplexity}
                            ></input>
                          </div>
                          <hr
                            style={{
                              width: '',
                              padding: 'none',
                              marginTop: 0,
                              marginBottom: 0,
                            }}
                          />

                          <div>
                            Space Complexity
                            <input
                              style={{
                                width: '100%',
                                border: 'none',
                                display: 'inline',
                                padding: 'none',
                              }}
                              onChange={(e) => {
                                let copy = JSON.parse(
                                  JSON.stringify(ideas),
                                ) as typeof ideas;
                                copy[idx].spaceComplexity = e.target.value;
                                setIdeas(copy);
                              }}
                              value={i.spaceComplexity}
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {currentTab === 2 && (
            <div>
              {tests.map((t, i) => {
                return (
                  <div key={`test-${i}`}>
                    <h2>Test {i + 1}</h2>
                    <p>
                      <strong>Input</strong> {t.input}
                    </p>
                    <p>
                      <strong> Output</strong> {t.output}
                    </p>
                    <button
                      onClick={() => {
                        let jsCode = ts.transpileModule(generatorCode, {
                          compilerOptions: {
                            module: ts.ModuleKind.CommonJS,
                            target: ts.ScriptTarget.ESNext,
                          },
                        }).outputText;
                        // TODO figure out the types ok
                        let gen = new Function('return ' + jsCode)();
                        setTester(gen(t.inputVal.nums));
                      }}
                    >
                      Start Test By Step
                    </button>
                    <button
                      onClick={() => {
                        let jsCode = ts.transpileModule(code, {
                          compilerOptions: {
                            module: ts.ModuleKind.CommonJS,
                            target: ts.ScriptTarget.ESNext,
                          },
                        }).outputText;
                        let func = new Function('return ' + jsCode)() as (
                          nums: number[],
                        ) => boolean;
                        if (func(t.inputVal.nums) === t.outputVal) {
                          // todo this should be pass by the object
                        }
                      }}
                    >
                      Check if output are equal
                    </button>
                    {testter !== null && (
                      <button
                        onClick={() => {
                          let n = testter.next();

                          if (n.done) {
                            setTester(null);
                          } else {
                            console.log((n.value as any).variables!);
                            setCurrentTestVariables(
                              (n.value as any).variables!,
                            );
                            let copy = new Array(linesExplanation.length).fill(
                              '',
                            );
                            copy[(n.value as any).line] = (n.value as any).text;
                            setLineExplanation(copy);
                          }
                        }}
                      >
                        Next Step
                      </button>
                    )}
                  </div>
                );
              })}
              {currentTestVariables !== null && (
                <div>{JSON.stringify(currentTestVariables)}</div>
              )}
            </div>
          )}
        </div>
        <div
          id='code'
          style={{
            width: '60%',
            border: '2px solid black',
          }}
        >
          <div>
            <div onClick={() => setCurrentTabRight(0)}>Edit</div>
            <div
              onClick={() => {
                let copy = generatorCode.split('\n');
                if (!copy[0].includes('function*')) {
                  copy[0] = copy[0].replace('function', 'function*');
                }
                setGeneratorCode(copy.join('\n'));
                console.log(copy.join('\n'));
                setCurrentTabRight(1);
              }}
            >
              Explain
            </div>
          </div>
          {currentTabRight === 0 && (
            <>
              <h2>Edit Code</h2>
              <textarea
                style={{ width: '100%', minHeight: 200 }}
                onChange={(e) => {
                  setCode(e.target.value);
                  setGeneratorCode(code);
                }}
                value={code}
              />
            </>
          )}
          {currentTabRight === 1 && (
            <>
              <h2>Explain code</h2>
              {code.split('\n').map((c, idx) => {
                let value = (
                  <div
                    key={`explain-${idx}`}
                    onClick={() => {
                      setIsModalOpen(true);
                      setCurrentlyExplaining({ text: '', line: idx });
                    }}
                  >
                    <pre>{c}</pre>
                    {linesExplanation[idx] && (
                      <pre>{linesExplanation[idx]}</pre>
                    )}
                  </div>
                );
                return value;
              })}
            </>
          )}
          <Modal isOpen={isModalOpen}>
            <div>
              <input
                value={currentlyExplaning.text}
                onChange={(e) => {
                  let copy = JSON.parse(
                    JSON.stringify(currentlyExplaning),
                  ) as typeof currentlyExplaning;
                  copy.text = e.target.value;
                  setCurrentlyExplaining(copy);
                }}
              />
              <button
                onClick={() => {
                  const text = `yield {text: '${currentlyExplaning.text}', variables: variables, line: ${currentlyExplaning.line} }`;
                  let newGeneratorCode = generatorCode
                    .split('\n')
                    .toSpliced(
                      currentlyExplaning.line + 1 + explained,
                      0,
                      text,
                    );
                  setExplained(explained + 1);
                  setGeneratorCode(newGeneratorCode.join('\n'));
                  setLineExplanation(Array(newGeneratorCode.length).fill(''));
                  setIsModalOpen(false);
                }}
              >
                addExplanation
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
