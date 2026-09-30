# SELF_ASSESSMENT_REPORT.md — template 
Every submission contains this file, at the root of the zip. Score yourself against **the rubric of that assignment**, criterion by criterion. 

The total you write here goes into the name of your zip: <StudentID>_<total>.zip, or <StudentID1>-<StudentID2>-<StudentID3>_<total>.zip for group work. 
# What to write 
## Self-assessment — IA#1 
Submitted by: <student ID> — <full name> (group work: one line per member) Total I claim: 78 / 100 
| Criterion | Max | I claim | Evidence | 
|---|---|---|---| 
| Behaviour | 30 | 26 | npm test green; `qty: 1.5` throws, see test/cart.test.js:34 | | Tests | 20 | 15 | 4 tests; no test for the free-shipping threshold | 
| Harness | 20 | 16 | CLAUDE.md + npm test + lint; CI added but never ran red | | Brief | 15 | 13 | brief.md — files, contract, "no dependencies" | 
| AI-LOG.md | 15 | 8 | written after the fact, so it is thinner than it should be | ## What I did not manage 
The threshold case. I noticed it while writing this table, too late to add. 
## What I would do differently 
Write the AI-LOG entry as I go. Reconstructing it at the end lost the two places where I rejected what the assistant produced.
## Rules 
- **Evidence must point at something**: a file, a section, a commit, a test name. "I did this well" is not evidence. 
- The section What I did not manage is scored as honesty, not as failure. An empty one on an imperfect submission reads worse than a frank paragraph. 
- The number in the file name must equal the total in this table. If they disagree, the table wins. 
- Your self-score does not set your mark — but an inaccurate one costs you. See Honesty adjustment below, and in the rubric of every assignment. 

## Honesty adjustment 
Your self-assessment is compared with the mark you actually earn. The gap is your total − the mark, on the same 100-point scale. 

| Gap | Adjustment |
|---|---|
|within ±10 |none — this is normal calibration|
|+11 to +20 | −3 |
|+21 to +30 | −6 |
| more than +30 | −10 |
| −21 or worse | −3 — read the rubric before you score yourself down |
| no SELF_ASSESSMENT_REPORT.md |−10, and the file-name total is ignored |

    
A criterion you claim with no evidence line counts as claimed-and-not-done for this comparison. The adjustment never takes a submission below 0. 
Scoring yourself honestly low costs you nothing inside ±10. Claiming marks you did not earn costs more than the marks would have been worth.
