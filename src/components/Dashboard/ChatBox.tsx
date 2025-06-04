import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; // Or MessageSquareText

interface ChatBoxProps {
  className?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ className }) => {
  const handleChatClick = React.useCallback(() => {
    // In a real app, this would open a chat widget or navigate to a chat page.
    alert('Chat demo activated!');
  }, []);

  return (
    <Button
      onClick={handleChatClick}
      className={cn(
        'fixed bottom-6 right-6 z-20 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2',
        'flex items-center space-x-2 px-5 py-3',
        className
      )}
    >
      {/* <MessageCircle size={20} className="mr-2" /> Using text and dot from image */}
      <span>Chat demo</span>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </Button>
  );
};

export default ChatBox;
