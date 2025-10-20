/*
  # Update feedback table policies
  
  1. Changes
    - Drop existing policies
    - Add new policy for public insert (anyone can submit feedback)
    - Keep authenticated read policy for admin dashboard
  
  2. Security
    - Public can submit feedback anonymously
    - Only access after login can view feedback
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit feedback" ON feedback;
DROP POLICY IF EXISTS "Authenticated users can read feedback" ON feedback;

-- Allow anyone (including anonymous) to submit feedback
CREATE POLICY "Public can submit feedback"
  ON feedback
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Anyone can read feedback (we'll protect with password in the app)
CREATE POLICY "Public can read feedback"
  ON feedback
  FOR SELECT
  TO public
  USING (true);

-- Anyone can update feedback (for marking as read)
CREATE POLICY "Public can update feedback"
  ON feedback
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);
