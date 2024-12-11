import { useParams } from 'react-router';
import { dsAlgoData } from '../data';
import { useState } from 'react';
import { List } from './list';

export default function DsInfo() {
  let params = useParams() as { ds: 'array' };
  const [dsInfo] = useState(dsAlgoData[params.ds].info);
  const [problems] = useState(dsAlgoData[params.ds].problems);

  return (
    <main>
      <h1>{params.ds}</h1>
      <List list={dsInfo} />

      <h2>Problems</h2>
      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>leetcode</th>
            <th>My Solution</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(problems).map((pId) => {
            let id = pId[0];
            let value = pId[1];
            return (
              <tr key={id}>
                <td>{`${id}. ${value.title}`}</td>
                <td>
                  <a href={value.leetcodeLink}>Leetcode</a>
                </td>

                <td>
                  <a href={`/dsAlgo/${params.ds}/p/${id}`}>Canvas</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
