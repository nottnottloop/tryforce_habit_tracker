INSERT INTO levels (xpTarget)
VALUES
(2),
(3),
(5),
(7),
(10),
(13),
(16),
(20),
(25),
(31),
(39),
(48),
(60),
(75),
(94),
(118),
(147),
(184),
(230),
(288),
(331),
(381),
(438),
(503),
(579),
(666),
(765),
(880),
(1012),
(1164),
(1339),
(1540),
(1771),
(2036),
(2342),
(2693),
(3097),
(3561),
(4095),
(4710),
(5416),
(6229),
(7163),
(8237),
(9473),
(10894),
(12528),
(14407),
(16568),
(19054),
(21912),
(25199),
(28978),
(33325),
(38324),
(44072),
(50683),
(58286),
(67029),
(77083),
(88645),
(101942),
(117234),
(134819),
(155042),
(178298),
(205042),
(235799),
(271169),
(311844),
(358620),
(412414),
(474276),
(545417),
(627229),
(721314),
(829511),
(953938),
(1097028),
(1261582),
(1450820),
(1668443),
(1918709),
(2206516),
(2537493),
(2918117),
(3355834),
(3859210),
(4438091),
(5103805),
(5869375),
(6749782),
(7762249),
(8926586),
(10265574),
(11805411),
(13576222),
(15612655),
(17954554),
(20647737);





INSERT INTO profilePics (src)
VALUES
('/images/link.png'),
('/images/link2.png'),
('/images/zelda.png'),
('/images/zeldacdi.jpg'),
('/images/morshu.png');




INSERT INTO users (username, email, password, rupees, profilePic, xp, level)
VALUES
('Zeiadork','Zeiadork@gmail.com','a',100,2,0,1),
('Nottnott','a@a.col','a',200,3,0,1),
('Rakib','a@a.cob','a',300,1,0,1);





INSERT INTO habits (user_id, title, frequency, streak, category, timesdone, completed, daysexist, dayscompleted)
VALUES
(1, 'Do wellness stuff', 4, 2,'Lifestyle', 2, false, 3, 3),
(1, 'Learn python', 1, 0, 'Work', 0, false, 0, 0),
(1, 'Do weights', 1, 3, 'Fitness', 0, false, 3, 3),
(2, 'Cardio', 1, 4,'Fitness', 0, false, 5, 4),
(1, 'Learn something', 1, 9,'Work', 1, true, 6, 5),
(3, 'Code challenges', 2, 9,'Work', 2, true, 5, 5 );

