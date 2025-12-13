import { Header } from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio with Header
          </h1>
          <p className="text-xl text-gray-600">
            Testing Header component
          </p>
        </div>
      </div>
    </div>
  );
}
