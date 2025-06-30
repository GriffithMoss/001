// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center">
        
        {/*
          These `className` values are Tailwind CSS classes!
          - text-4xl: Makes the text extra large.
          - font-bold: Makes the text bold.
          - text-blue-600: Makes the text a nice blue color.
        */}
        <h1 className="text-4xl font-bold text-blue-600">
          Stationery-Linkへようこそ！
        </h1>

        {/*
          - mt-2: Adds a small margin to the top.
          - text-lg: Makes the text large.
          - text-gray-700: Makes the text a dark gray.
        */}
        <p className="mt-2 text-lg text-gray-700">
          最高の文房具を見つける場所。
        </p>

      </div>
    </main>
  );
}