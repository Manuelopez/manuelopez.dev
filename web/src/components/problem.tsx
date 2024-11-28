import { useState } from 'preact/hooks';
import { type ComponentChildren } from 'preact';

function ListItem({ listItem }: { listItem: string | string[] }) {
  return (
    <>
      {Array.isArray(listItem) ? (
        <List list={listItem} />
      ) : (
        <li>
          <p>{listItem}</p>
        </li>
      )}
    </>
  );
}

function List({ list }: { list: (string | string[])[] }) {
  return (
    <ul>
      {list.map((listItem) => (
        <ListItem listItem={listItem} />
      ))}
    </ul>
  );
}
export default function ContainsDuplice({
  title,
  description,
  constraints,
  ideas,
  children,
  code,
}: {
  title: string;
  description: string;
  constraints: string[];

  code: string;
  ideas: {
    title: string;
    timeComplexity: string;
    spaceComplexity: string;
    steps: (string | string[])[];
  }[];
  tests: {
    input: string;
    output: string;
    explanation: string;
    inputVal: number[];
    outputVal: boolean;
  }[];
  children: ComponentChildren;
}) {
  const [currentTab, setCurrentTab] = useState(0);

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
                  {constraints.map((c) => {
                    return <li>{c}</li>;
                  })}
                </ul>
              </div>
              <div>
                <h2>Ideas</h2>
                {ideas.map((i) => {
                  return (
                    <div>
                      <p>
                        {i.title} Time: {i.timeComplexity} Space:{' '}
                        {i.spaceComplexity}
                        <List list={i.steps} />
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {currentTab === 2 && <>{children}</>}
        </div>
        <div id='code' style={{ width: '60%' }}>
          <h2>Code</h2>
          <div>{code}</div>
        </div>
      </div>
    </div>
  );
}
