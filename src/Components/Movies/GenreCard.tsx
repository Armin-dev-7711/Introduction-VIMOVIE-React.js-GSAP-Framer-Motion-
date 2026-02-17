interface GenreCardProps {
  genre: string;
}

const GenreCard: React.FC<GenreCardProps> = ({ genre }) => {
  return (
    <div className='w-full max-w-[250px] bg-texts text-primary flex justify-center items-center h-[350px] text-2xl sm:text-3xl shrink font-Anton'>
      {genre}
    </div>
  );
};

export default GenreCard;
