import { Vault } from 'lucide-react';
import {ModeToggle} from './ui/themebutton';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-3'>
      
      <div className='flex items-center gap-2'>
        <Vault className='size-10' color='red' />
        <div className='flex flex-col gap-4'>
          <span className='tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center'>
            Vault{" "}
            <span className='rounded-3xl text-base bg-primary/10 border border-red-500 px-2'>
              1.0
            </span>
          </span>
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
}

export default Navbar