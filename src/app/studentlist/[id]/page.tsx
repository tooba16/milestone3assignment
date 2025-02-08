// Folder: studentlist/[Components3]/page.tsx
export default function DynamicPage({ params }: { params: { Components1: string ,Components2:string,Components3:string,Components4:string} }) {
    return (
      <div>
        <h1>Dynamic Route: {params.Components1}</h1>
        <h1>Dy ynamic Route: {params.Components2}</h1>
        <h1>Dynamic Route: {params.Components3}</h1>
        <h1>Dynamic Route: {params.Components4}</h1>
      </div>
    );
  }
