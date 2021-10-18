export function RepositoryItem(props) {
  let html = (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description}</p>
      <p>{props.repository.html_url}</p>
      <a  href={props.repository.html_url} target="_blank">Acessar repositório</a>
    </li>
  );
  return html;
}
