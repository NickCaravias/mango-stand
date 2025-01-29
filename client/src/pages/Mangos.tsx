import DriedMango from '../assets/dried-mango.webp';
import ProductBox from '../components/ProductBox';

const Mangos = () => {  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Shop for mangos</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <ProductBox
          name="Dehydrated Mangoes"
          imageUrl={DriedMango}
          price={5.99}
        />
      </div>
    </div>
  );
};

export default Mangos;