export default function Button({ name, heightCS, widthCS }: { name: string, heightCS: string , widthCS: string  }) {
  return (
    <button className="bg-black text-white font-bold rounded-lg text-center" style={{ height: heightCS, width: widthCS }}>
      {name}
    </button>
  )
}