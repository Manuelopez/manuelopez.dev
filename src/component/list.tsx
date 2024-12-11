export function ListItem({ listItem }: { listItem: string | string[] }) {
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

export function List({ list }: { list: any }) {
  return (
    <ul>
      {list.map((listItem: any, i: any) => (
        <ListItem key={`$list-${i}`} listItem={listItem} />
      ))}
    </ul>
  );
}
