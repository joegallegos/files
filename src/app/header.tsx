'use client';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher } from '@clerk/clerk-react';
import { UserButton, SignInButton, SignedOut } from '@clerk/nextjs';

export function Header() {
  return (
    <div className="border-b py-4 bg-gray-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>CookBook</div>
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
